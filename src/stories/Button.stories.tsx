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
        text: "Botão",
        onClick: () => {
            console.log("Clicked!")
        },
        onMouseEnter: () => {
            console.log("Mouse Enter!")
        },
        onMouseLeave: () => {
            console.log("Mouse Leave!")
        }
    }
}

export const Secondary: StoryObj<typeof Button> = {
    args: {
        text: "Botão",
        type: "secondary",
    }
};

export const Success: StoryObj<typeof Button> = {
    args: {
        text: "Botão",
        type: "success"
    }
};

export const Danger: StoryObj<typeof Button> = {
    args: {
        text: "Botão",
        type: "danger"
    }
};

export const Warning: StoryObj<typeof Button> = {
    args: {
        text: "Botão",
        type: "warning"
    }
};

export const BoxShadow: StoryObj<typeof Button> = {
    args: {
        text: "Botão",
        shadow: true
    }
};

export const Hover: StoryObj<typeof Button> = {
    args: {
        text: "Botão",
        transform: true
    }
};