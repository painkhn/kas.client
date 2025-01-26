import { createI18n } from "vue-i18n";

type MessageSchema = {
    auth: {
        title: string;
        login: string;
        register: string;
        social: {
            title: string;
        };
    };
    language: {
        title: string;
        select: string;
    };
};

const messages = {
    en: {
        auth: {
            title: "Authorization",
            login: "Sign In",
            register: "Sign Up",
            social: {
                title: "Or continue with",
            },
        },
        language: {
            title: "Language",
            select: "Select language",
        },
    },
    ru: {
        auth: {
            title: "Авторизация",
            login: "Войти",
            register: "Зарегистрироваться",
            social: {
                title: "или войти с помощью",
            },
        },
        language: {
            title: "Язык",
            select: "Выберите язык",
        },
    },
} satisfies Record<string, MessageSchema>;

export const i18n = createI18n({
    legacy: false,
    locale: "ru",
    fallbackLocale: "en",
    messages,
});

export type MessageSchemaType = MessageSchema;
