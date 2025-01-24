'use server';

import connectDB from '@/config/database';
import Case from '@/models/Case';

export default async function getCase(orderId) {
  try {
    await connectDB();

    // Find case by orderId
    const caseDetails = await Case.findOne({ orderId }).populate('user');

    if (!caseDetails) {
      return {
        success: false,
        message: 'Case not found',
      };
    }

    // Convert Mongoose document to plain object
    return {
      success: true,
      data: JSON.parse(JSON.stringify(caseDetails)),
    };
  } catch (error) {
    console.error('Error fetching case:', error);
    return {
      success: false,
      message: error.message || 'Failed to fetch case details',
    };
  }
} 