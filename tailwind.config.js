module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            poppin: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                "matt-black": "#343434",
                "input-border": "#E7E7E7",
                "form-bg": "#100db1",
                "half-white": "#f7f7f7",
                "light-black": "#343434",
                'red': "#f80d38",
            },
            margin: {
                "25px": "25px",
            },
        },
    },
    plugins: [],
};
