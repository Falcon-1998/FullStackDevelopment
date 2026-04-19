export default function LanguageChips({ wrongGuessCount , languages}) {
    
    return (
        <section className="language-chips">
            {languages.map((lang, index) => (
                <span 
                    key={index} 
                    className={`language-chip ${index < wrongGuessCount ? 'shaded' : ''}`}
                >
                    {lang}
                </span>
            ))}           
        </section>
    );
}