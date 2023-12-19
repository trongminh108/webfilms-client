'use client';
import './signin.scss';

import { MD5 } from 'crypto-js';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import { LOGIN_MUTATION } from '@/graphql-client/mutations';
import { useMutation } from '@apollo/client';

function SignIn() {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [username_inp, setUsername_inp] = useState<string>('');
    const [password_inp, setPassword_inp] = useState<string>('');
    const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);

    function handleShowpassword() {
        setShowPassword((prev) => !prev);
    }

    const handleUsernameChange = (e: any) => {
        setUsername_inp(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword_inp(e.target.value);
    };

    async function handleSubmitForm(e: any) {
        e.preventDefault();
        alert(username_inp + ',' + MD5(password_inp).toString());
        try {
            const { data } = await loginMutation({
                variables: {
                    username: username_inp,
                    password: MD5(password_inp).toString(),
                },
            });

            console.log('Login successful:', data);
        } catch (err: any) {
            console.error('Login error:', err.message);
        }
    }

    return (
        <Container className="sign-in-container" fluid>
            <div className="title">Sign In</div>
            <Form className="form-container" onSubmit={handleSubmitForm}>
                <div className="d-flex justify-content-center">
                    <Image
                        id={'avatar'}
                        alt="avatar signin"
                        className="bg-white rounded-circle"
                        src={'/../../../../images/LogoTGex.png'}
                        width={150}
                        height={150}
                    />
                </div>
                <Form.Group className="mb-3" controlId="formSigninEmail">
                    <Form.Label className="text-white fw-bold">
                        Email address or username:
                    </Form.Label>
                    <Form.Control
                        className="rounded-pill ps-3"
                        type="text"
                        placeholder="Enter your email or username"
                        required
                        onChange={handleUsernameChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSigninPassword">
                    <Form.Label className="text-white fw-bold">
                        Password:
                    </Form.Label>
                    <Form.Control
                        className="rounded-pill ps-3"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        required
                        onChange={handlePasswordChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSigninCheckbox">
                    <Form.Check
                        className="text-white"
                        type="checkbox"
                        label="Show password"
                        onClick={handleShowpassword}
                    />
                </Form.Group>
                <Button type="submit" className="btn-submit">
                    Sign In
                </Button>
            </Form>
        </Container>
    );
}

export default SignIn;
