
function TextField({label,name, value, onChange}) {
    return (
        <div>
            <label htmlFor={name} className="my-5">{label}</label>
            
            <input className="text-sm w-full bg-gray px-4 py-2 border border-gray-100 rounded"
             type="text" name={name} id={name} value={value} onChange={onChange}/>
        
        </div>
    )
}

export default TextField;