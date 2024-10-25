import Breadcrumb from './Breadcrumb'; 

export default function Hero() {
  const breadcrumbItems = [
    { label: 'Shop', href: '/shop' },
    { label: 'Products', href: '/products' },
    { label: 'Catalogue', isLast: true }, 
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto rounded-[30px] mt-12 h-auto md:h-[360px] bg-[url('/img/bg-fashion.jpg')] bg-cover bg-center bg-no-repeat flex flex-row md:flex-col justify-center items-center md:items-start relative px-2 md:p-12 mb-12">
        <div className='pl-2'>
          <h1 className="text-lg md:text-5xl font-bold text-left text-white w-full md:w-[60%] uppercase mb-3">
            20% Gift on only today and Get Special Gift
          </h1>
          <p className="text-gray-100 text-sm md:text-xl w-full md:w-[50%]">
            Today only, enjoy a stylish 20% off and receive an exclusive gift! Elevate your wardrobe now!
          </p>
        </div>
        <img src="/img/model.png" className="md:absolute right-10 bottom-0 w-[40%] md:w-[25%] transform md:translate-x-0" alt="Model" />
      </div>
    </div>
  );
}
