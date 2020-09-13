use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn say(s: &str) -> String {
    let r = String::from("Pong ");
    return r + s;
}