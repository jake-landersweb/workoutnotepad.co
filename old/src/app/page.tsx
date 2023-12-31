import DownloadButtons from '@/components/donwloadButtons'
import PhoneAsset from '@/components/phoneAsset'

export default function Home() {
  return <main className='space-y-8'>
    <div className="grid place-items-center min-h-[90vh] sm:py-0">
      <div className="space-y-2">
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-center'>Workout Notepad</h1>
        <p className='text-center text-md md:text-2xl text-txt-200'>The Gym Notebook Replacement. Download Today</p>
        <DownloadButtons className='bg-cell-300 hover:bg-cell-100' />
        <div className="grid place-items-center pt-8">
          <img src="/assets/wn-graphic.png" alt="Workout Notepad Graphic" className={`object-scale-down max-h-[50vh]`} />
        </div>
      </div>
    </div>
  </main>
}
