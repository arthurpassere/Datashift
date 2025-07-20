import GlassSurface from "./GlassSurface";

export default function Header() {
  return (
    <div className='Header flex justify-center m-5'>
      <GlassSurface
        width='90%'
        height='55px'
        borderRadius={24}
        className='w-full max-w-[800px] min-w-[300px] !flex !items-center !justify-space-between'
      >
        <div className='flex items-center justify-between h-full w-full'>
          <div className='text-white font-bold flex items-center m-4'>
            <img
              src='Logo-icon.png'
              alt=''
              className='h-8 w-auto object-contain'
            />
            <div className='ml-2'>DATASHIFT</div>
          </div>
        </div>
      </GlassSurface>
    </div>
  );
}
