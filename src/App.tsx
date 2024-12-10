import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTime } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTime}>
    <Button variant="primary" />
    <Button variant="secondary" />
    <Button variant="success" />
    <Button variant="danger" />
    <Button />
  </ThemeProvider>
  )
}


