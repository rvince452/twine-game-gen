# Location Passages Summary

## Naming Convention Used: `loc-container-name`

### Exterior Locations

#### Forest and Natural Areas
- `loc-ravine-north` - North boundary ravine
- `loc-forest-general` - Main forest area (hub for forest locations)
- `loc-forest-pond` - Forest area near pond
- `loc-forest-barn` - Forest area near barn
- `loc-forest-maze-pool` - Forest area near maze and pool
- `loc-forest-garden-house` - Forest area near garden and house
- `loc-forest-driveway` - Forest area near driveway
- `loc-forest-path` - General forest connecting paths

#### Campground Area
- `loc-campground-main` - Main campground area
- `loc-campground-cabin1` - Campground Cabin 1
- `loc-campground-cabin2` - Campground Cabin 2  
- `loc-campground-cabin3` - Campground Cabin 3

#### Pond Area
- `loc-pond-main` - Main pond location
- `loc-pond-dock` - Wooden dock on pond
- `loc-pond-boathouse` - Pond boathouse

#### Barn Area
- `loc-barn-main` - Main barn exterior
- `loc-barn-floor1` - Barn first floor
- `loc-barn-floor2` - Barn second floor (hayloft)
- `loc-barn-floor3` - Barn third floor (top level)

#### Pool and Recreation
- `loc-maze-main` - Hedge maze entrance
- `loc-pool-main` - Swimming pool area
- `loc-poolhouse-main` - Pool house

#### Garden and Grounds
- `loc-garden-main` - Main garden area
- `loc-garden-fountain` - Garden fountain centerpiece

#### Roads and Access
- `loc-road-dirt` - Dirt road (south boundary)
- `loc-garage-main` - Garage

#### House Exterior
- `loc-house-exterior` - Main house exterior/approach

### Interior Locations

#### House - First Floor
- `loc-house-floor1-entry` - Main entry/foyer
- `loc-house-floor1-closet` - Entry closet
- `loc-house-floor1-living` - Living room
- `loc-house-floor1-kitchen` - Kitchen
- `loc-house-floor1-pantry` - Kitchen pantry
- `loc-house-floor1-utility` - Utility closet
- `loc-house-floor1-laundry` - Laundry room
- `loc-house-floor1-bathroom` - Laundry room bathroom
- `loc-house-floor1-study` - Study
- `loc-house-floor1-bar` - Bar area
- `loc-house-floor1-maid` - Maid quarters

#### House - Second Floor
- `loc-house-floor2-hallway` - Second floor hallway
- `loc-house-floor2-bathroom` - Guest bathroom
- `loc-house-floor2-master` - Master bedroom
- `loc-house-floor2-master-closet` - Master bedroom closet
- `loc-house-floor2-master-bathroom` - Master bathroom
- `loc-house-floor2-bedroom2` - Bedroom 2
- `loc-house-floor2-bedroom3` - Bedroom 3

#### House - Attic
- `loc-house-attic-main` - Main attic area
- `loc-house-attic-forward` - Forward attic section

#### House - Basement
- `loc-house-basement-main` - Main basement area
- `loc-house-basement-storage` - Storage room
- `loc-house-basement-furnace` - Furnace room
- `loc-house-basement-work` - Work room

## Navigation Structure

The locations are interconnected with logical navigation:

1. **Forest Hub**: `loc-forest-general` serves as the main hub connecting all forest areas
2. **House Hub**: `loc-house-floor1-entry` serves as the main house navigation point
3. **Vertical Navigation**: Proper up/down connections between house floors
4. **Logical Connections**: Related areas are connected (e.g., kitchen to pantry, bedroom to closet)

## Files Created

1. `02_locations_exterior.twee` - All outdoor locations
2. `03_locations_house.twee` - All house interior locations

## Notes for Development

- Each passage includes HTML comments describing its purpose
- Positioning data included for Twine editor organization
- Room for expansion (maze puzzle, forest encounters, etc.)
- Consistent navigation patterns throughout
- Ready for adding interactive elements, items, and NPCs