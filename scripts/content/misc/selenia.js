let selenia;

selenia = extend(Planet, "selenia", Planets.sun, 3, 1, {
    localizedName: "Selenia",
    generator: new SerpuloPlanetGenerator(), // TODO make custom generator
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("8f00ff"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3
});
selenia.meshLoader = () => extend(HexMesh, selenia, 8, {});
