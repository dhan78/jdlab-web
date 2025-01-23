'use server';

import connectDB from '@/config/database';
import DentalCase from '@/models/DentalCase';
import { getSessionUser } from '@/utils/getSessionUser';

export default async function addDentalCase(formData) {
  try {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      throw new Error('User must be logged in to submit a case');
    }

    const dentalCase = {
      user: sessionUser.user.id,
      // Pontic Design
      ridgeRelief: {
        required: formData.get('ridge-relief') === 'yes',
        measurement: formData.get('ridge-relief-mm'),
      },
      // Implant Information
      implant: {
        brand: formData.get('implant-brand'),
        size: formData.get('implant-size'),
      },
      // Occlusal Staining
      occlusalStaining: formData.get('occlusal-staining'),
      // Doctor and Patient Information
      doctorInfo: {
        name: formData.get('doctor-name'),
        accountNumber: formData.get('account-number'),
      },
      patientInfo: {
        name: formData.get('patient-name'),
        prepDate: formData.get('prep-date'),
      },
      // Porcelain Options
      porcelainOptions: formData.getAll('porcelain-options'),
      // Add timestamp
      createdAt: new Date(),
    };

    await connectDB();
    await DentalCase.create(dentalCase);

    return {
      success: true,
      message: 'Dental case submitted successfully',
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
} 