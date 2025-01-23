import { Schema, model, models } from 'mongoose';

const CaseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    material: {
      type: String,
      required: true,
    },
    shades: {
      base: {
        type: String,
        required: true,
      },
      gingival: {
        type: String,
      },
      incisal: {
        type: String,
      },
    },
    preferences: {
      crownUnderPartial: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No',
      },
      occlusalContact: {
        type: String,
        enum: ['Light', 'Medium', 'Heavy'],
        default: 'Light',
      },
      proximalContact: {
        type: String,
        enum: ['Light', 'Medium', 'Heavy'],
        default: 'Medium',
      },
      occlusalStaining: {
        type: String,
        enum: ['Light', 'Medium', 'Heavy', 'None'],
        default: 'Light',
      },
      anatomicalDesign: {
        type: String,
      },
      occlusalClearance: {
        type: String,
      },
    },
    status: {
      type: String,
      enum: ['Placed', 'Design Preview', 'Shipment', 'Delivery'],
      default: 'Placed',
    },
    statusTimeline: {
      placed: {
        type: Date,
        default: Date.now,
      },
      designPreview: Date,
      shipment: Date,
      delivery: Date,
    },
    attachments: [{
      type: String, // URLs to uploaded files
    }],
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Case = models.Case || model('Case', CaseSchema);

export default Case; 