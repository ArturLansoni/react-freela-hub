const RatingIcon = ({ color = '#FFD700', size = 24 }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color} height={size} width={size}
        viewBox="0 -960 960 960"
    >
        <path d="m668-380 152-130 120 10-176 153 52 227-102-62-46-198Zm-94-292-42-98 46-110 92 217-96-9ZM173-120l65-281L20-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
    </svg>
)

export { RatingIcon }
