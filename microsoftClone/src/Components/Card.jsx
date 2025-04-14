import Button from "./Button"

const Card = ({img, heading, description, buttonLabel}) => {
  return (
    <div className="w-full shadow-xl relative">
      <img className="w-full" src={img} alt="Feature Image" />
      <div className="p-6 flex flex-col justify-between lg:h-[320px]">
        <div>
          <h2 className="text-[21px] lg:font-semibold font-semibold">{heading}</h2>
          <p className="my-2.5">{description}</p>
        </div>
        <Button label={buttonLabel} />
      </div>
    </div>
  )
}

export default Card
