import React, { useState } from "react";
import { VscEye } from "react-icons/vsc";

const Inputfild = ({
  type,
  placeholder,
  Label,
  className,
  iconposition,
  name,
  onChange,
  Labelclass,
  value,
  maxLength,
  onKeyPress,
  readOnly
}) => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div>
        <label className={`text-sm text-black/50 block ${Labelclass}`}>{Label}</label>
        <div className="relative">
          <input
          maxLength={maxLength}
            onChange={onChange}
            type={show === true ? "text" : type}
            name={name}
            value={value}
            readOnly={readOnly}
            onKeyPress={onKeyPress}
            autoComplete="given-name"
            placeholder={placeholder}
            className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 md:w-[450px] w-full h-[55px] rounded-full ${
              type === "password" ? "pr-11" : null
            } ${className}`}
          />
          {type === "password" && (
            <VscEye
              className={`absolute top-1/2 -translate-y-1/2 ${iconposition} text-xl`}
              onClick={() => setshow(!show)}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Inputfild;
