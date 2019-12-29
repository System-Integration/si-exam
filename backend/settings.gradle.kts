rootProject.name = "backend"
pluginManagement {
    repositories {
        mavenCentral()
        gradlePluginPortal()
        jcenter()
    }
    resolutionStrategy {
        eachPlugin {
            if (requested.id.id == "cz.habarta.typescript-generator") {
                useModule("cz.habarta.typescript-generator:typescript-generator-gradle-plugin:${requested.version ?: "+"}")
            }
        }
    }
}