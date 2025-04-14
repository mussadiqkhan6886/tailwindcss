import { features } from '../constants'
import Card from '../Components/Card'

const Features = () => {
  return (
    <div className='p-4 mt-3 grid grid-cols-1 gap-12 at-580px md:mt-40 at-1060px lg:gap-7 lg:px-12'>
      {features.map((feature, index) => (
        <Card key={index} {...feature} />
      ))}
    </div>
  )
}

export default Features
