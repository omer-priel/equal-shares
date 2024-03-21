export type Props = {
    aboutPageShowd: boolean;
    setAboutPageShowd: (value: boolean) => void;
};

export default function Footer({ aboutPageShowd, setAboutPageShowd } : Props) {
    const aboutLabel = aboutPageShowd ? 'Back' : 'About';

    return (
        <div>
            <p>This is a simple authentication app</p>
            <button onClick={() => {setAboutPageShowd(!aboutPageShowd)}}>{aboutLabel}</button>
        </div>
    );
}