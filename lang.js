const translations = {
    en: {
        "nav-home": "Home",
        "nav-tab2": "Tab 2",
        "welcome-title": "Welcome to Our Tavern",
        "welcome-sub": "Experience authentic flavors and traditional hospitality.",
        "history-title": "Our Story",
        "history-text": "Founded in 2010, our tavern started with a simple mission: to serve hearty, delicious meals made from local ingredients. Passed down through generations, we continue to keep the tradition alive.",
        "dishes-title": "Popular Dishes",
        "dish1-title": "Traditional Moussaka",
        "dish1-desc": "Layers of eggplant, spiced minced meat, and creamy béchamel sauce.",
        "dish2-title": "Fresh Greek Salad",
        "dish2-desc": "Crisp cucumbers, ripe tomatoes, red onions, olives, and premium feta cheese.",
        "info-title": "Hours & Location",
        "hours-title": "Opening Hours",
        "hours-weekday": "Monday - Friday: 12:00 PM - 11:00 PM",
        "hours-weekend": "Saturday - Sunday: 1:00 PM - 12:00 AM",
        "find-title": "Find Us",
        "address": "123 Flavor Street, Athens, Greece",
        "reviews-title": "What Our Guests Say",
        "review1-text": "\"The best tavern in town! The atmosphere is incredible and the food reminds me of home.\"",
        "review1-author": "— Maria K.",
        "review2-text": "\"Amazing service and the signature dishes are to die for. Highly recommend!\"",
        "review2-author": "— Alex M.",
        "footer-text": "© 2026 Our Tavern. All rights reserved."
    },
    el: {
        "nav-home": "Αρχική",
        "nav-tab2": "Καρτέλα 2",
        "welcome-title": "Καλωσήρθατε στην Ταβέρνα Μας",
        "welcome-sub": "Απολαύστε αυθεντικές γεύσεις και παραδοσιακή φιλοξενία.",
        "history-title": "Η Ιστορία Μας",
        "history-text": "Ιδρύθηκε το 2010, η ταβέρνα μας ξεκίνησε με μια απλή αποστολή: να σερβίρει χορταστικά, νόστιμα γεύματα φτιαγμένα από τοπικά υλικά. Περνώντας από γενιά σε γενιά, συνεχίζουμε να κρατάμε την παράδοση ζωντανή.",
        "dishes-title": "Δημοφιλή Πιάτα",
        "dish1-title": "Παραδοσιακός Μουσακάς",
        "dish1-desc": "Στρώσεις από μελιτζάνες, αρωματικό κιμά και πλούσια κρέμα μπεσαμέλ.",
        "dish2-title": "Φρέσκια Χωριάτικη Σαλάτα",
        "dish2-desc": "Τραγανά αγγούρια, ώριμες ντομάτες, κόκκινα κρεμμύδια, ελιές και εκλεκτά κομμάτια φέτας.",
        "info-title": "Ωράριο & Τοποθεσία",
        "hours-title": "Ωράριο Λειτουργίας",
        "hours-weekday": "Δευτέρα - Παρασκευή: 12:00 μ.μ. - 11:00 μ.μ.",
        "hours-weekend": "Σάββατο - Κυριακή: 1:00 μ.μ. - 12:00 π.μ.",
        "find-title": "Βρείτε Μας",
        "address": "Οδός Λιχουδιάς 123, Αθήνα, Ελλάδα",
        "reviews-title": "Τι Λένε οι Επισκέπτες Μας",
        "review1-text": "\"Η καλύτερη ταβέρνα στην πόλη! Η ατμόσφαιρα είναι απίστευρη και το φαγητό μου θυμίζει σπίτι.\"",
        "review1-author": "— Μαρία Κ.",
        "review2-text": "\"Εξαιρετική εξυπηρέτηση και οι σπεσιαλιτέ τους δεν υπάρχουν. Το συνιστώ ανεπιφύλακτα!\"",
        "review2-author": "— Αλέξης Μ.",
        "footer-text": "© 2026 Η Ταβέρνα Μας. Με επιφύλαξη παντός δικαιώματος."
    }
};

// Function to change language and save setting
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Apply selected language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
});
