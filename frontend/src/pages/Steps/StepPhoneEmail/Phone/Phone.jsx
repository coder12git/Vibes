import React, { useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http/index';
import { setOtp } from '../../../../store/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

const Phone = ({ onNext }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const isValid = (phoneNumber) => {
        const phoneRegex = /^[0-9]{10,12}$/; // validation check
        return phoneRegex.test(phoneNumber);
    }

    async function submit() {

        if (!phoneNumber) {
            toast.error("Phone number is required");
            return;
        }
        if (!isValid(phoneNumber)) {
            toast.error("Please enter a valid phone number.");
            return;
        }
        const { data } = await sendOtp({ phone: phoneNumber });
        // console.log(data);
        dispatch(setOtp({ phone: data.phone, hash: data.hash }));
        toast.info(`Your OTP is ${data.otp}`);
        onNext();

    }
    return (
        <Card title="Enter you phone number" icon="phone">
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="E.g. - 1234567890"
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

export default Phone;
