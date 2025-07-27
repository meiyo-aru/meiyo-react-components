import {Button} from "../components/Button/Button";
import type {Meta, StoryObj} from "@storybook/react-vite"

const meta: Meta<typeof Button> = {
    title: "Componentes/Button",
    component: Button,
    tags: ["autodocs"]

}
export default meta;

export const Primary: StoryObj<typeof Button> = {
    args: {
        text: "fala dog"
    }
}