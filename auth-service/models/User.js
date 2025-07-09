import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email requis.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Mot de passe requis.']
  }
}, { timestamps: true });

// Plugin pour valider l'unicité (email déjà utilisé)
UserSchema.plugin(uniqueValidator, { message: 'Erreur : {PATH} existe déjà.' });

// Hash du mot de passe
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Méthode de comparaison de mot de passe
UserSchema.methods.comparePassword = function (candidatePwd) {
  return bcrypt.compare(candidatePwd, this.password);
};

export default mongoose.model('User', UserSchema);
