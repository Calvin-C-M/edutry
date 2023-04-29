import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Tryouts from '../components/Tryouts'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div>
        <div class="w-full px-10 md:px-28 pt-8 md:pt-16">
          <h1>Tryout Terbaru</h1>
        </div>
      </div>
      <Tryouts />
    </div>
  )
}