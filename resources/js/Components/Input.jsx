import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../../css/input.css";

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className = "", // Default to empty string
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    onChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError ? "input-error" : ""
                } ${variant ? `input-${variant}` : ""} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={onChange}
                placeholder={placeholder}
            />
            {isError && (
                <span className="text-sm text-red-500 mt-1">{isError}</span>
            )}
        </div>
    );
}
