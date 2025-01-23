'use server';

import mongoose from 'mongoose';
import connectDB from '@/config/database';
import Case from '@/models/Case';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath, redirect } from 'next/navigation';

export default async function addCase(formData) {
  try {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      throw new Error('User must be logged in to submit a case');
    }

    await connectDB();

    // Generate orderId
    const count = await Case.countDocuments();
    const randomNum = Math.floor(Math.random() * 1000);
    const timestamp = Date.now().toString().slice(-4);
    const orderId = `LAB-${count + 1}-${timestamp}-${randomNum}`;

    const caseData = {
      user: mongoose.Types.ObjectId(sessionUser.user.id), // Cast user to ObjectId
      orderId, // Add the generated orderId
      patientName: formData.get('patientName'),
      doctor: formData.get('doctor'),
      deliveryAddress: formData.get('deliveryAddress'),
      material: formData.get('material'),
      shades: {
        base: formData.get('shades.base'),
        gingival: formData.get('shades.gingival'),
        incisal: formData.get('shades.incisal'),
      },
      preferences: {
        crownUnderPartial: formData.get('preferences.crownUnderPartial'),
        occlusalContact: formData.get('preferences.occlusalContact'),
        proximalContact: formData.get('preferences.proximalContact'),
        occlusalStaining: formData.get('preferences.occlusalStaining'),
        anatomicalDesign: formData.get('preferences.anatomicalDesign'),
        occlusalClearance: formData.get('preferences.occlusalClearance'),
      },
      notes: formData.get('notes'),
      attachments: [], // Handle file uploads later
      status: 'Placed', // Set initial status
      statusTimeline: {
        placed: new Date(),
      },
    };

    const newCase = await Case.create(caseData);

    revalidatePath('/', 'layout');
    redirect(`/cases/${newCase._id}`);

    return {
      success: true,
      message: 'Case submitted successfully',
      data: newCase,
    };
  } catch (error) {
    console.error('Error creating case:', error);
    return {
      success: false,
      message: error.message || 'Failed to submit case',
    };
  }
}