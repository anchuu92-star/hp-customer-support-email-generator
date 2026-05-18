// Language translations
const translations = {
    czech: {
        greeting: 'Dobrý den',
        issueReported: 'Hlášený problém',
        caseRef: 'Referenční číslo případu',
        serialNumber: 'Sériové číslo HP',
        regards: 'S pozdravem',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    dutch: {
        greeting: 'Hallo',
        issueReported: 'Gemeld probleem',
        caseRef: 'Zaak ref.nr.',
        serialNumber: 'HP serienummer',
        regards: 'Met vriendelijke groet',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    english: {
        greeting: 'Hello',
        issueReported: 'Issue Reported',
        caseRef: 'Case Ref#',
        serialNumber: 'HP Serial#',
        regards: 'Regards',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    hungarian: {
        greeting: 'Tisztelt',
        issueReported: 'Bejelentett probléma',
        caseRef: 'Esetsz.szám',
        serialNumber: 'HP sorozatszám',
        regards: 'Üdvözlettel',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    italian: {
        greeting: 'Gentile',
        issueReported: 'Problema segnalato',
        caseRef: 'Rif. caso#',
        serialNumber: 'N. seriale HP#',
        regards: 'Cordiali saluti',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    polish: {
        greeting: 'Cześć',
        issueReported: 'Zgłoszony problem',
        caseRef: 'Nr ref. sprawy',
        serialNumber: 'Numer seryjny HP',
        regards: 'Pozdrawiam',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    portuguese: {
        greeting: 'Olá',
        issueReported: 'Problema relatado',
        caseRef: 'Ref. do caso#',
        serialNumber: 'Nº de série HP#',
        regards: 'Atenciosamente',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    romanian: {
        greeting: 'Bună',
        issueReported: 'Problemă raportată',
        caseRef: 'Reper caz#',
        serialNumber: 'Nr. serie HP#',
        regards: 'Cu plăcere',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    russian: {
        greeting: 'Здравствуйте',
        issueReported: 'Сообщённая проблема',
        caseRef: 'Номер обращения#',
        serialNumber: 'Серийный номер HP#',
        regards: 'С уважением',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    serbian: {
        greeting: 'Здраво',
        issueReported: 'Пријављен проблем',
        caseRef: 'Реф. предмета#',
        serialNumber: 'Серијски број HP#',
        regards: 'Уважите',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    slovak: {
        greeting: 'Dobrý deň',
        issueReported: 'Hlásený problém',
        caseRef: 'Referenčné číslo prípadu',
        serialNumber: 'Sériové číslo HP',
        regards: 'S pozdravom',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    slovenian: {
        greeting: 'Zdravo',
        issueReported: 'Prijavljeni problem',
        caseRef: 'Ref. primera#',
        serialNumber: 'Serijska številka HP#',
        regards: 'Lep pozdrav',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    spanish: {
        greeting: 'Hola',
        issueReported: 'Problema reportado',
        caseRef: 'Ref. de caso#',
        serialNumber: 'Nº de serie HP#',
        regards: 'Saludos cordiales',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
    swedish: {
        greeting: 'Hej',
        issueReported: 'Rapporterat problem',
        caseRef: 'Ärendeef#',
        serialNumber: 'HP serienr#',
        regards: 'Med vänlig hälsning',
        title: 'HP Trusted Advisor',
        department: 'EMEA Commercial Support – Personal Systems',
        company: 'HP Customer Support',
    },
};

// Form and UI elements
const emailForm = document.getElementById('emailForm');
const languageSelect = document.getElementById('language');
const customerNameInput = document.getElementById('customerName');
const issueDetailsInput = document.getElementById('issueDetails');
const caseRefInput = document.getElementById('caseRef');
const serialNumberInput = document.getElementById('serialNumber');
const bodyContentInput = document.getElementById('bodyContent');
const emailPreview = document.getElementById('emailPreview');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');

let generatedEmail = '';

// Generate email on form submission
emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    generateEmail();
});

// Enable/disable action buttons based on email content
function toggleActionButtons(hasContent) {
    copyBtn.disabled = !hasContent;
    downloadBtn.disabled = !hasContent;
}

function generateEmail() {
    const language = languageSelect.value;
    const customerName = customerNameInput.value.trim();
    const issueDetails = issueDetailsInput.value.trim();
    const caseRef = caseRefInput.value.trim();
    const serialNumber = serialNumberInput.value.trim();
    const bodyContent = bodyContentInput.value.trim();

    if (!language || !customerName || !issueDetails || !caseRef || !serialNumber) {
        alert('Please fill in all required fields.');
        return;
    }

    const trans = translations[language];

    let emailBody = `${trans.greeting} ${customerName},\n\n`;
    emailBody += `${trans.issueReported}: ${issueDetails}\n`;
    emailBody += `${trans.caseRef}: ${caseRef}\n`;
    emailBody += `${trans.serialNumber}: ${serialNumber}\n\n`;

    if (bodyContent) {
        emailBody += `${bodyContent}\n\n`;
    } else {
        emailBody += `We have received your support request and have opened a case in our system. Our technical team is reviewing your issue and will contact you shortly with updates and a resolution.\n\n`;
    }

    emailBody += `${trans.regards},\n`;
    emailBody += `AnushaAshok\n`;
    emailBody += `${trans.title}\n`;
    emailBody += `${trans.department}\n`;
    emailBody += `${trans.company}\n`;
    emailBody += `HP Geo link for support options - https://support.hp.com/contact`;

    generatedEmail = emailBody;
    emailPreview.textContent = generatedEmail;
    emailPreview.classList.add('active');
    toggleActionButtons(true);
}

// Copy to clipboard
copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(generatedEmail).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        alert('Failed to copy: ' + err);
    });
});

// Download as TXT file
downloadBtn.addEventListener('click', function() {
    const element = document.createElement('a');
    const file = new Blob([generatedEmail], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `HP_Support_Email_${new Date().getTime()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});

// Initialize
toggleActionButtons(false);