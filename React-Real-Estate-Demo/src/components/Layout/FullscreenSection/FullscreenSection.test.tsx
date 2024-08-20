import { render } from "@testing-library/react"
import FullscreenSection from "./FullscreenSection"
import '@testing-library/jest-dom'


test('FullscreenSection: Renders with No Children, No Background, No Blur', () => {
    const { getByTestId } = render(<FullscreenSection backgroundSrc="" blurBackground={false} />);
    const divElement = getByTestId("fullscreen_div");
    expect(divElement).toBeInTheDocument();
    expect(divElement.children.length).toBe(0);
})


test('FullscreenSection: Renders with Background image', () => {
    const { getByTestId } = render(<FullscreenSection backgroundSrc="https://images.unsplash.com/photo-1504615755583-2916b52192a3" blurBackground={false} />);
    const divElement = getByTestId("fullscreen_div");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveStyle(`background-image: url("https://images.unsplash.com/photo-1504615755583-2916b52192a3")`);
})


test('FullscreenSection: Renders with blurred Background image', () => {
    const { getByTestId } = render(<FullscreenSection backgroundSrc="https://images.unsplash.com/photo-1504615755583-2916b52192a3" blurBackground={true} />);
    const divElement = getByTestId("fullscreen_div");
    expect(divElement).toBeInTheDocument();
    expect(divElement.children.length).toBe(1);
    expect(divElement.firstChild).toEqual(getByTestId("blur_div"));
})




