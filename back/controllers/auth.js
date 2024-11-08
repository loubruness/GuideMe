import { checkExistsUser, createUser, getUserById, getUserByEmail } from '../database/queries/user.js';
import { hash, compare } from 'bcrypt';

import jwt from 'jsonwebtoken';
const { sign } = jwt;


async function createUserAction(request, response) {
    if (!await checkExistsUser(request.body.email)) {
        const hashed_password = await hash(request.body.password, 10);
        const id = await createUser(request.body.email, hashed_password, request.body.username);
        if (id != null) {
            console.log('[',request.ip,'] CREATED User: ', id);
            response.status(200).json({info: "user created successfully", created_user: await getUserById(id)});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(400).json({error: "email already taken"});
    }
}

async function loginUserAction(request, response) {
    const user = await getUserByEmail(request.body.email);
    //console.log(user);
    if (user != null && await compare(request.body.password, user.hashed_password)) {
        const token = sign({user_id: user.id}, process.env.SECRET_KEY, { expiresIn: '1h' });
        if (token != null) {
            console.log('[',request.ip,'] LOGGED IN User: ', user.id);
            response.status(200).json({info: "user logged in successfully", token: token, user_id: user.id, admin: user.admin});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(400).json({token: null});
    }
}

async function verifyTokenAction(request, response) {
    return response.status(200).json({info: 'Valid token', user_id: request.user_id});
}

export {
    createUserAction,
    loginUserAction,
    verifyTokenAction
};