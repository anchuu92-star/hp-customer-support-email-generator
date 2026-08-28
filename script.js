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
    danish: {
        greeting: 'Hej',
        issueReported: 'Rapporteret problem',
        caseRef: 'Sagsnummer#',
        serialNumber: 'HP serienummer#',
        regards: 'Med venlig hilsen',
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
        partsNotAvailable: 'Parts Not Available',
        materialShortage: 'Material Shortage',
        etaUpdate: 'ETA Update',
        partsNotAvailableBody: 'Unfortunately, the parts are not available.\n\nThis has been escalated to our Logistics Team who are trying to source the parts. We will contact you as soon as we have an update.',
        contactUs: 'If you have any queries, please feel free to contact us regarding the REPAIR STATUS\nHP Resources can be contacted using the below support options',
        privacyStatement: 'For information about HP privacy practices, read the online privacy statement at www.hp.com/privacy.',
        disclaimer: 'Our advice is strictly limited to the question(s) asked and is based on the information provided to us. Please review the HP Support Disclaimer at http://www.hp.com/support/emaildisclaimers',
        unableToContact: 'We have been unable to contact you at the phone number provided.',
        materialShortageInfo: 'We inform you that we have a shortage of the necessary material for your HP product with serial number',
        initialEta: 'The Initial ETA provided for your material is:',
        willContactSoon: 'We will contact you shortly to inform you about the expected date of assistance.',
        expandInfo: 'You can expand this information by calling us using the below link or reply to this email.',
        inconvenience: 'We apologize for any inconvenience for the delay that may be caused. Our logistics department is naturally anxious to shorten the waiting time for you.',
        thankYou: 'We thank you for your patience and understanding!',
        newEta: 'We would like to inform you that the Material Exception Team could not source the part as mentioned earlier and the new ETA is',
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
    norwegian: {
        greeting: 'Hei',
        issueReported: 'Rapportert problem',
        caseRef: 'Saksnummer#',
        serialNumber: 'HP serienummer#',
        regards: 'Med vennlig hilsen',
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

// KCI Email Templates
const kciTemplates = {
    kci1: {
        name: '1st KCI - Parts Not Available',
        bodyTemplate: (language, caseRef, serialNumber) => {
            if (language === 'english') {
                return `This e-mail is regarding HP case reference number ${caseRef}
Unfortunately, the parts are not available.
 
This has been escalated to our Logistics Team who are trying to source the parts. 
We will contact you as soon as we have an update. 
 
If you have any queries, please feel free to contact us regarding the REPAIR STATUS 
HP Resources can be contacted using the below support options
 
www.support.hp.com/contact
Select Country > Enter Serial Number to get the support details
 
 
For information about HP privacy practices, read the online privacy statement at www.hp.com/privacy.
Our advice is strictly limited to the question(s) asked and is based on the information provided to us. Please review the HP Support Disclaimer at http://www.hp.com/support/emaildisclaimers`;
            }
            return `This e-mail is regarding HP case reference number ${caseRef}\n...`;
        }
    },
    kci2: {
        name: '2nd KCI - Material Shortage with ETA',
        bodyTemplate: (language, caseRef, serialNumber, eta) => {
            if (language === 'english') {
                return `We have been unable to contact you at the phone number provided.
We inform you that we have a shortage of the necessary material for your HP product with serial number ${serialNumber}.
The Initial ETA provided for your material is: ${eta}
We will contact you shortly to inform you about the expected date of assistance.
You can expand this information by calling us using the below link or reply to this email.
 
www.support.hp.com/contact
Select Country > Enter Serial Number to get the support details
 
 
We apologize for any inconvenience for the delay that may be caused. Our logistics department is naturally anxious to shorten the waiting time for you. 
We thank you for your patience and understanding! 

For information about HP privacy practices, read the online privacy statement at www.hp.com/privacy.
Our advice is strictly limited to the question(s) asked and is based on the information provided to us. Please review the HP Support Disclaimer at http://www.hp.com/support/emaildisclaimers`;
            }
            return `We have been unable to contact you at the phone number provided.\n...`;
        }
    },
    kci3: {
        name: '3rd KCI - ETA Update',
        bodyTemplate: (language, caseRef, serialNumber, eta, newEta) => {
            if (language === 'english') {
                return `We have been unable to contact you at the phone number provided.
We inform you that we have a shortage of the necessary material for your HP product with serial number ${serialNumber}.
The Initial ETA provided for your material is: ${eta}
We would like to inform you that the Material Exception Team could not source the part as mentioned earlier and the new ETA is ${newEta}
We will contact you shortly to inform you about the expected date of assistance.
You can expand this information by calling us using the below link or reply to this email.
 
www.support.hp.com/contact
Select Country > Enter Serial Number to get the support details
 
 
We apologize for any inconvenience for the delay that may be caused. Our logistics department is naturally anxious to shorten the waiting time for you. 
We thank you for your patience and understanding! 

For information about HP privacy practices, read the online privacy statement at www.hp.com/privacy.
Our advice is strictly limited to the question(s) asked and is based on the information provided to us. Please review the HP Support Disclaimer at http://www.hp.com/support/emaildisclaimers`;
            }
            return `We have been unable to contact you at the phone number provided.\n...`;
        }
    }
};

// Form and UI elements
const emailForm = document.getElementById('emailForm');
const languageSelect = document.getElementById('language');
const templateSelect = document.getElementById('template');
const customerNameInput = document.getElementById('customerName');
const issueDetailsInput = document.getElementById('issueDetails');
const caseRefInput = document.getElementById('caseRef');
const serialNumberInput = document.getElementById('serialNumber');
const bodyContentInput = document.getElementById('bodyContent');
const etaInput = document.getElementById('eta');
const newEtaInput = document.getElementById('newEta');
const emailPreview = document.getElementById('emailPreview');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');

let generatedEmail = '';

// Show/hide ETA fields based on template selection
function updateFormFields() {
    const template = templateSelect.value;
    const etaFields = document.getElementById('etaFields');
    const newEtaField = document.getElementById('newEtaField');
    
    if (template === 'kci1') {
        etaFields.style.display = 'none';
        newEtaField.style.display = 'none';
    } else if (template === 'kci2') {
        etaFields.style.display = 'block';
        newEtaField.style.display = 'none';
    } else if (template === 'kci3') {
        etaFields.style.display = 'block';
        newEtaField.style.display = 'block';
    }
}

// Event listener for template selection
templateSelect.addEventListener('change', updateFormFields);

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
    const template = templateSelect.value;
    const customerName = customerNameInput.value.trim();
    const issueDetails = issueDetailsInput.value.trim();
    const caseRef = caseRefInput.value.trim();
    const serialNumber = serialNumberInput.value.trim();
    const bodyContent = bodyContentInput.value.trim();
    const eta = etaInput.value.trim();
    const newEta = newEtaInput.value.trim();

    if (!language || !customerName || !caseRef || !serialNumber) {
        alert('Please fill in all required fields.');
        return;
    }

    // Additional validation for specific templates
    if ((template === 'kci2' || template === 'kci3') && !eta) {
        alert('Please fill in the ETA field for this template.');
        return;
    }

    if (template === 'kci3' && !newEta) {
        alert('Please fill in the New ETA field for this template.');
        return;
    }

    const trans = translations[language];
    
    let emailBody = `${trans.greeting} ${customerName},\n\n`;
    
    // Generate body based on template
    if (template === 'kci1') {
        emailBody += kciTemplates.kci1.bodyTemplate(language, caseRef, serialNumber);
    } else if (template === 'kci2') {
        emailBody += kciTemplates.kci2.bodyTemplate(language, caseRef, serialNumber, eta);
    } else if (template === 'kci3') {
        emailBody += kciTemplates.kci3.bodyTemplate(language, caseRef, serialNumber, eta, newEta);
    } else {
        // Default custom email generation
        emailBody += `${trans.issueReported}: ${issueDetails}\n`;
        emailBody += `${trans.caseRef}: ${caseRef}\n`;
        emailBody += `${trans.serialNumber}: ${serialNumber}\n\n`;

        if (bodyContent) {
            emailBody += `${bodyContent}\n\n`;
        } else {
            emailBody += `We have received your support request and have opened a case in our system. Our technical team is reviewing your issue and will contact you shortly with updates and a resolution.\n\n`;
        }
    }

    emailBody += `\n\n${trans.regards},\n`;
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
updateFormFields();
toggleActionButtons(false);