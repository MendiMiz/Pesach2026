export const translations = {
    he: {
        hero: {
            title: "חבילות פסח 2026",
            description: `הפרויקט מיועד לסטודנטים השוהים באיטליה במהלך חג הפסח.
לקראת החג אנו מתארגנים לשלוח חבילות חג על מנת לאפשר לחוש את אווירת החג גם כשרחוקים מהבית.

סטודנטים המעוניינים לקבל חבילה מתבקשים להירשם בהקדם.
<strong>ההרשמה דרך טופס זה תהיה פתוחה עד ראש חודש ניסן – 18 במרץ.</strong>

בברכת פסח כשר ושמח,
צמח ואפרת מזרחי`,
            subscribeButton: "הירשם לקבלת חבילה",
        },
        sederInfo: {
            dateLabel: "תאריך ליל הסדר",
            date: 'ליל הסדר השנה יחול ביום רביעי בערב י"ד ניסן - 01/04/2026',
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
            englishOnlyNote: "* יש למלא באותיות לועזיות בלבד (למעט שדה ההערות)",
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
            contactPrefix: "ליצירת קשר:",
            blessing: [
                "בברכת חירות אמיתית בגאולה האמיתית והשלימה תיכף ומיד ממש.",
                "יחי אדוננו מורנו ורבינו מלך המשיח לעולם ועד",
                "עם ישראל חי!"
            ],
            phone: "+39 348 017 8695"
        },
    },

    en: {
        hero: {
            title: "Pesach Packages 2026",
            description: `We are organizing to send holiday packages to students staying in Italy during the Passover, allowing to feel the holiday atmosphere even when far from home.

                        Students interested in receiving a package are requested to register as soon as possible.
                        <strong>Registration via this form will be open until Rosh Chodesh Nissan – March 18th.</strong>
                        
                        Wishing you a Kosher and Happy Passover,
                        Tzemach and Efrat Mizrachi`,
            subscribeButton: "Subscribe to receive a package",
        },
        sederInfo: {
            dateLabel: "Seder Date",
            date: 'The Seder will take place on Wednesday evening, April 1st, 2026 (14th of Nissan)',
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
            englishOnlyNote: "* Please use English letters only (except for the notes field)",
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
            contactPrefix: "Contact us:",
            blessing: [
                "Wishing everyone a Kosher and Happy Passover",
                "Moshiach now!",
                "Am Israel hai!"
            ],
            phone: "+39 348 017 8695"
        },
    },
} as const

export type Lang = keyof typeof translations
export type Translations = (typeof translations)["he"]
