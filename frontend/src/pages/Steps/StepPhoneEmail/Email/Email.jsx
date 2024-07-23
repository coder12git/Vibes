import React, { useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http/index';
import { setOtp } from '../../../../store/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";


const Email = ({ onNext }) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    async function submit() {

        if (!email) {
            toast.error("Email is required");
            return;
        }
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        const { data } = await sendOtp({ phone: email });
        // console.log(data);
        dispatch(setOtp({ phone: data.phone, hash: data.hash }));
        toast.info(`Your OTP is ${data.otp}`);
        onNext();
       
    }
    return (
        <Card title="Enter your email id" icon="email-emoji">
            <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={submit} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
};

export default Email;
