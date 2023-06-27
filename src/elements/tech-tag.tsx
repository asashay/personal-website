/** @jsx jsx */
import { jsx } from "theme-ui"

const TechTag = ({ children }: { children: React.ReactNode }) => (
    <span sx={{
        padding: '5px 10px',
        background: '#403f3f',
        color: 'white',
        borderRadius: '16px',
        marginRight: '5px',
        marginTop: '5px',
        display: 'inline-block'
    }}>{children}</span>
)


export default TechTag;