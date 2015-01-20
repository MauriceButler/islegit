# islegit

Dodgey thing for build system to check if all installed modules are up to date as per dependencies SemVer

## CLI usage

    islegit

Will write "legit" to stdout if there is nothing that could be updated with npm update, otherwise it will write "nope".

Will always exit with code 0 because reasons... (build system)


## Module

    // TODO: If I ever need it...