let lang = {
    ar: { 
        home: "الصفحة الرئيسية",
        about : "حولنا ",
        price: "التسعيرة",
        tm: "الفريق",
        contact: "تواصل معنا " , 
        doc : "الوثيقة" , 
        sell : "برنامج نقاط البيع الوحيد الذي تحتاجه  ", 
        dzsell: " , Dz SELL " ,
        desc : " ⚡ برنامج نقاط البيع المستند على الويب والذي يمكن تشغيله على إلكترون وفي متصفحك " , 
        Learn : "اكتشف المزيد",
        download :"حمله الآن ",
        fr :"الخصائص",
        feature: " الخصائص الرئيسية لـ Dz SELL " ,
        feat: "عزز المبيعات الخاصة بمشرروعك وتحكم فيها بسهولة مع الخصائص العديدة التي يقدمها لك Dz SELL",
        ui : "واجهة استخدام  سهلة وبسيطة توفر لك تجربة رائعة ",
        uidesc:"برنامج نقاط البيع الخاص بنا بسيط للغاية وسهل الاستخدام ومناسب للمبتدئين. كما أنه يدعم العديد من اللغات. يتضمن أيضًا لوحة تحكم وقسم للتقارير لتتبع حالة عملك.",
        instdesc:"نحن نوفر لكم خدمة تثبيت وإعداد البرنامج مجانًا",
        inst:"دعم مجاني للتثبيت والإعداد ",
        mail:"إرسال الإيصالات عبر البريد الإلكتروني ",
        maildesc:"برنامج Dz SELL مجهز ليمكن المستخدم أو البائع من إرسال إيصال البيع أو الفاتورات عبر البريد الإلكتروني الخاص بالعميل ",
        easy:"سهولة الوصول والإدارة ",
        easydesc:"برنامج Dz SELL  يسهل عملة الوصول له للمستخدمين من خلال إمكانية مشاركته على الشبكة ، وإحتواؤه على نظام تنظيم الموضفين وصلاحياتهم يجعل إدارة مشاريعكم سهلة ",
    },
    en: {
        home: " Home",
        about : "About ",
        price: "pricing",
        tm: "Team",
        contact: "Contact" , 
        doc : "Documentation"  , 
        sell : "The only POS software you need ", 
        desc : "  a web based POS software that can run on electron and on your browser ",
        Learn : "Learn More",
        download :"Download Now ",
        fr :"Features",
        feature: "Main Features of Dz SELL " ,
        feat: " Supercharge your sales with our feature-rich POS system. All the POS features you need to thrive, in one easy-to-use platform. ",
        ui : " simple UI and great user experience ",
        uidesc:"our pos softwate is really simple and easy to use and beginner friendly it also Support many languages. also it include a dashboard and a reports section to track the statue of your bisness",
        instdesc:" we provide a FREE installation service for our Customers ",
        inst:"installation support ",
        mail :"E-mail Sending",
        maildesc:"our POS software can handle sending invoices and reciept to your customers ",
    
    
    },
   
   
    }


;
document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById('language-selector');
    const body = document.body; 

    // Set the language selector to the stored language or default to 'en'
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    languageSelector.value = storedLang;
    translatePage(storedLang);
    setDirection(storedLang);

    languageSelector.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        // Store the selected language in local storage
        localStorage.setItem('selectedLanguage', selectedLang);
        translatePage(selectedLang);
        setDirection(selectedLang);
    });

    function setDirection(lang) {
        if (lang === 'ar') {
            body.classList.add('rtl');
        } else {
            body.classList.remove('rtl');
        }
    }
});

function translatePage(language) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (lang[language] && lang[language][key]) {
            element.textContent = lang[language][key];
        }
    });
}
