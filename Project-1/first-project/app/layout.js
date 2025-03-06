import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="header-background">
          <img src='\wave-haikei.svg' className='w-[100%]' />
        </div>

        {children}
      </body>
    </html>
  );
}
