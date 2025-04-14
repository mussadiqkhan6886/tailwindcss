import Button from "./Button"

const Card = ({img, heading, description, buttonLabel}) => {
  return (
    <div className="w-full Height-1060px shadow-xl relative">
      <img className="w-full" src={img} alt="Feature Image" />
      <div className="p-6 flex flex-col items-start justify-between lg:h-[350px]">
        <div>
          <h2 className="text-[21px] lg:font-semibold font-semibold">{heading}</h2>
          <p className="my-2.5 text-[15px]">{description}</p>
        </div>
        <Button label={buttonLabel} />
      </div>
    </div>
  )
}

export default Card
