    const translations = {
    en: {
        // Navigation & Global
        "nav-home": "Home",
        "nav-menu": "Menu", // Updated this to say Menu instead of Tab 2
        "footer-text": "© 2026 Our Tavern. All rights reserved.",

        // Home Page Content
        "welcome-title": "Welcome to 'To Steki'",
        "welcome-sub": "Experience authentic flavors and traditional hospitality.",
        "history-title": "Our Story",
        "history-text": "Founded in ????, our tavern started with a simple mission: to serve hearty, delicious meals made from local ingredients. Passed down through generations, we continue to keep the tradition alive.",
        "dishes-title": "Popular Dishes",
        "info-title": "Hours & Location",
        "hours-title": "Opening Hours",
        "hours-weekday": "Monday - Sunday: 08:00 AM - 11:00 PM",
        "find-title": "Find Us",
        "address": "Kastori, Laconia, Greece",

        // Menu Page Content (New additions)
        "menu-title": "Our Full Menu",
        "menu-sub": "Traditional recipes made with love.",
        "cat-appetizers": "Appetizers",
        "app1-title": "Fries",
        "app1-desc": "Fries made from homegrown potatoes with care.",
        "app2-title": "Saganaki",
        "app2-desc": "Fried golden cheese with a squeeze of fresh lemon juice.",
        "app3-title": "Barrel-Aged Feta",
        "app3-desc": "Traditional feta cheese topped with organic olive oil and oregano.",
        "app4-title": "Traditional Sausage",
        "app4-desc": "Local country sausage grilled over open flame, infused with herbs.",
        "app5-title": "Kefalograviera Cheese",
        "app5-desc": "A premium pan-seared traditional hard cheese with a rich, salty flavor.",
        "app6-title": "Mini Cheese Rolls",
        "app6-desc": "Crispy, flaky phyllo pastries filled with a mixture of Greek cheeses.",
        "app7-title": "Traditional Meatballs",
        "app7-desc": "Crispy on the outside, juicy on the inside, seasoned with fresh mint and garlic.",
        "cat-mains": "Meat Platters",
        "main1-title": "Small Size",
        "main1-desc": "1-2 people",
        "main2-title": "Medium Size",
        "main2-desc": "2-3 People",
        "main3-title": "Large  Size",
        "main3-desc": "4+ people"
    },
    el: {
        // Navigation & Global
        "nav-home": "Αρχική",
        "nav-tab2": "Μενού", 
        "nav-menu": "Μενού",
        "footer-text": "© 2026 Το Στέκι. Με επιφύλαξη παντός δικαιώματος.",

        // Home Page Content
        "welcome-title": "Welcome to 'To Steki'",
        "welcome-title": "Καλωσήρθατε στο Στέκι",
        "welcome-sub": "Απολαύστε αυθεντικές γεύσεις και παραδοσιακή φιλοξενία.",
        "history-title": "Η Ιστορία Μας",
        "history-text": "Ιδρύθηκε το ????, η ταβέρνα μας ξεκίνησε με μια απλή αποστολή: να σερβίρει χορταστικά, νόστιμα γεύματα φτιαγμένα από τοπικά υλικά. Περνώντας από γενιά σε γενιά, συνεχίζουμε να κρατάμε την παράδοση ζωντανή.",
        "dishes-title": "Δημοφιλή Πιάτα",
        "info-title": "Ωράριο & Τοποθεσία",
        "hours-title": "Ωράριο Λειτουργίας",
        "hours-weekday": "Δευτέρα - Κυριακή: 08:00 π.μ. - 11:00 μ.μ.",
        "find-title": "Βρείτε Μας",
        "address": "Καστόρι,  Λακωνία, Ελλάδα",


        // Menu Page Content (New additions)
        "menu-title": "Το Μενού Μας",
        "menu-sub": "Παραδοσιακές συνταγές φτιαγμένες με μεράκι.",
        "cat-appetizers": "Ορεκτικά",
        "app1-title": "Τηγανητές Πατάτες",
        "app1-desc": "Τηγαντές Πατάτες καλλιεργημένες στον κήπο μας με φροντίδα",
        "app2-title": "Σαγανάκι",
        "app2-desc": "Τηγανητό κεφαλοτύρι με λίγες σταγόνες φρέσκου λεμονιού.",
        "app3-title": "Βαρελίσια Φέτα",
        "app3-desc": "Παραδοσιακή φέτα με εξαιρετικό παρθένο ελαιόλαδο και ρίγανη.",
        "app4-title": "Χωριάτικο Λουκάνικο",
        "app4-desc": "Ντόπιο χωριάτικο λουκάνικο ψημένο στα κάρβουνα με μυρωδικά.",
        "app5-title": "Κεφαλογραβιέρα",
        "app5-desc": "Παραδοσιακό σκληρό τυρί σαγανάκι με πλούσια, αλμυρή γεύση.",
        "app6-title": "Τυροπιτάκια",
        "app6-desc": "Τραγανά σπιτικά τυροπιτάκια με φύλλο και γέμιση από ελληνικά τυριά.",
        "app7-title": "Κεφτεδάκια Παραδοσιακά",
"app7-desc": "Τραγανά απ' έξω, ζουμερά από μέσα, ζυμωμένα με φρέσκο δυόσμο και σκόρδο.",
        "cat-mains": "Κυρίως Πιάτα",
        "dish1-title": "Μικρό Μέγεθος",
        "dish1-desc": "1-2 άτομα",
        "main2-title": "Μεσαίο Μέγεθος",
        "main2-desc": "2-3 άτομα",
        "main3-title": "Μεγάλο Μέγεθος",
        "main3-desc": "4+ άτομα"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
});
