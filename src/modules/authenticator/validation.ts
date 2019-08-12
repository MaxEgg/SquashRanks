export const required = (value: string) => (value ? undefined : "Required");

export const min4 = (value: string) => {
    // console.error("hello", value.length);
};

export const email = (value: string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;
