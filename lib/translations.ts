export const translations = {
    he: {
        hero: {
            title: "חבילות פסח 2026",
            description: `הפרויקט מיועד לסטודנטים השוהים באיטליה במהלך חג הפסח.
לקראת החג אנו מתארגנים לשלוח חבילות חג על מנת לאפשר לחוש את אווירת החג גם כשרחוקים מהבית.

סטודנטים המעוניינים לקבל חבילה מתבקשים להירשם בהקדם.
ההרשמה דרך טופס זה תהיה פתוחה עד ראש חודש ניסן – 18 במרץ.

בברכת פסח כשר ושמח,
צמח ואפרת מזרחי`,
            subscribeButton: "הירשם לקבלת חבילה",
        },
        packageContents: {
            eyebrow: "מה בחבילה?",
            heading: "תכולת החבילה",
            items: [
                "הגדה (מקווים שנצליח להביא מהארץ)",
                "מצה שמורה",
                "מצות",
                "יין / מיץ ענבים",
                "שקדי מרק",
                "אבקת מרק",
                "חמוצים",
                "טונה",
                "עוגה",
                "עוגיות",
                "קניידלך",
                "קמח מצה",
                "פודינג",
                "חפיסת שוקולד",
            ],
        },
        orderForm: {
            eyebrow: "הזמנה",
            heading: "הזמנת חבילת פסח",
            subheading: "מלאו את הטופס ונחזור אליכם בהקדם",
            fields: {
                fullName: "First + Last name (שם מלא) *",
                address: "Adress (כתובת - רחוב ומספר) *",
                citofono: "citofono (אינטרקום)",
                city: "City (עיר) *",
                zip: "cap (מיקוד) *",
                phone: "מספר טלפון מקומי למסירה *",
                phone2: "מספר טלפון זמין של מבקש החבילה *",
                email: "e-mail (דואר אלקטרוני) *",
                notes: "הערות",
            },
            seder: {
                question: 'מעוניין להשתתף בליל סדר עם חב"ד? *',
                options: [
                    { value: "Yes", label: "כן" },
                    { value: "No", label: "לא" },
                    { value: "I have not decided yet", label: "טרם החלטתי" },
                ],
            },
            submit: "שלח הרשמה",
            submitting: "שולח...",
            successTitle: "תודה רבה!",
            successMessage: "תודה! פנייתך התקבלה, ניצור קשר בהקדם.",
            googleResponseLabel: "תגובת גוגל:",
            validation: {
                englishOnly: "אנא השתמשו באותיות באנגלית בלבד.",
                englishAlphanumeric: "אנא השתמשו באותיות באנגלית ומספרים בלבד.",
            },
        },
        footer: {
            contactPrefix: "לפרטים נוספים:",
            blessing: "בברכת פסח כשר ושמח, צמיחה ואפשרויות חירות לכולנו!",
        },
    },

    en: {
        hero: {
            title: "Pesach Packages 2026",
            description: `The project is aimed at students staying in Italy during the Passover holiday.
We are organizing to send holiday packages, allowing to feel the holiday atmosphere even when far from home.

Students interested in receiving a package are requested to register as soon as possible.
Registration via this form will be open until Rosh Chodesh Nissan – March 18th.

Wishing you a Kosher and Happy Passover,
Tzemach and Efrat Mizrachi`,
            subscribeButton: "Subscribe to receive a package",
        },
        packageContents: {
            eyebrow: "What's in the package?",
            heading: "Package Contents",
            items: [
                "Haggadah (hopefully brought from Israel)",
                "Shmurah Matzah",
                "Matzot",
                "Wine / Grape Juice",
                "Soup Almonds (Shkedei Marak)",
                "Soup Powder",
                "Pickles",
                "Tuna",
                "Cake",
                "Cookies",
                "Kneidlach",
                "Matzo Meal",
                "Pudding",
                "Chocolate Bar",
            ],
        },
        orderForm: {
            eyebrow: "Order",
            heading: "Order a Pesach Package",
            subheading: "Fill in the form and we'll get back to you shortly",
            fields: {
                fullName: "First + Last name *",
                address: "Address (street & number) *",
                citofono: "Intercom / Citofono",
                city: "City *",
                zip: "ZIP / Postal code *",
                phone: "Local phone number for delivery *",
                phone2: "Available phone number of the applicant *",
                email: "E-mail *",
                notes: "Notes",
            },
            seder: {
                question: "Interested in joining a Seder night with Chabad? *",
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "I have not decided yet", label: "Haven't decided yet" },
                ],
            },
            submit: "Submit Registration",
            submitting: "Sending…",
            successTitle: "Thank you!",
            successMessage: "Your request has been received. We'll be in touch soon.",
            googleResponseLabel: "Google response:",
            validation: {
                englishOnly: "Please use English letters only.",
                englishAlphanumeric: "Please use English letters and numbers only.",
            },
        },
        footer: {
            contactPrefix: "For more details:",
            blessing: "Wishing everyone a Kosher and Happy Passover, growth and freedom for all!",
        },
    },
} as const

export type Lang = keyof typeof translations
export type Translations = (typeof translations)["he"]
