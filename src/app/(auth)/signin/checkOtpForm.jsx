import OtpInput from 'react-otp-input';


function CheckOtpForm({ onSubmit ,otp , setOtp,onBack, time, onResendOtp}) {
    return(
        <div className="md:w-1/3 text-center max-w-lg ml-9">
            <button onClick={onBack} className='mb-4'>برگشت</button>
            <div className='mb-4'>
                {
                    time > 0 ?
                    <p> ثانیه تا ارسال مجدد کد {time}</p>
                : <button onClick={onResendOtp}>ارسال مجدد کد</button>}
            </div>
            <form className="space-y-10" onSubmit={onSubmit}>
                <p>کد تائید را وارد کنید</p>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputStyle={{
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: '2px solid rgba(0,0,0,0.3)',
                        borderRadius: "0.5rem",
                    }}
                    containerStyle="flex gap-x-2 justify-center"
                     renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                         />
                <button type="submit" className="bg-primary-focus hover:bg-blue-700
          text-white font-bold py-2 my-5 px-4 rounded">
                    تائید
                </button>
            </form>
        </div>
    )
}
export default CheckOtpForm;