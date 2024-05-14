import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(Backend).use(initReactI18next).init(
    {
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: {
            format: (value, format, lng) => {
                if (format === "number") {
                    return new Intl.NumberFormat(lng).format(value);
                }

                // Handle other formats if needed
                return value;
            }
        }
    }
);

export default i18n;
