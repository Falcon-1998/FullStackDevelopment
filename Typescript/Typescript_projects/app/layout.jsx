export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Assembly : Endgame</title>
                <meta name="description" content="A Hangman Game built with React and Typescript" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}