import mongoose from 'mongoose';

//attrs for type checking with typescript
interface UserAttrs {
    username: string,
    password: string
}

//interface for type checking of schema
interface UserModel extends mongoose.Model<any>{
    build(attrs: UserAttrs): any;
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

const User = mongoose.model<any, UserModel>('User', UserSchema);

User.build({
    username: "toan",
    password: "123"
})

export {User};