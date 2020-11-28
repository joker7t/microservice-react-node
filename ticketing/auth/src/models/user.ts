import mongoose from 'mongoose';

//attrs for type checking with typescript
interface UserAttrs {
    email: string,
    password: string
}

//interface for type checking of schema
interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs: UserAttrs): UserDoc;
}

//interface for type checking of each User document
//solve the issue unpredicted additional properties in mongoose model
interface UserDoc extends mongoose.Document{
    email: string,
    password: string
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', UserSchema);

export {User};