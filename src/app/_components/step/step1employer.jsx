import React from 'react'
import Input from '../input/input';
import { useFormikContext } from 'formik';

export default function Step1() {
    const { handleChange,values,errors,touched, } = useFormikContext();
    return (
        <>
            <div className="pt-10 pb-8">
                <h1 className='text-4xl font-bold text-primary-marineBlue'>مشخصات کارگر</h1>
                <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>لطفا نام و آدرس خود را تکمیل نمایید</h1>
            </div>
            <div>
                <Input
                    label="نام"
                    id='name'
                    name='name'
                    placeholder="نام و نام خانوادگی"
                    value={values.name}
                    onChange={handleChange("name")}
                    errorMessage={errors.name && touched.name ? errors.name : null}
                />
                <Input
                    label="آدرس"
                    placeholder="تهران"
                    id="email"
                    name='email'
                    value={values.email}
                    onChange={handleChange("email")}
                    errorMessage={errors.email && touched.email ? errors.email : null}
                />
                <Input
                    label="تلفن"
                    placeholder="09121234567"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    errorMessage={errors.phone && touched.phone ? errors.phone : null}
                />
            </div>
        </>
    )
}
