# Pathfinder Data Format

## Notes

Bloodline
- adds bonus feats at certain levels
  - can be union if more than one bloodline
- adds bloodline power choice at certain levels
- adds bonus spell choices for bloodline spells
- adds class skills

Archetypes
- replace standard feat with variant feat
- conditional bonus to attribute based on current location
- new abilities
- replace ability and spells with ability (not 1:1)
- remove proficiencies
- reduce normal penalties for certain things
- added proficiencies

### Add Option to Bonus Feat Choices

choice:bloodline_feat: []


Character is made of choices.
Each choice applies one or more effects.
Effects provide stat changes, additional choices, or modifications to existing choices?



# Numeric ID

4 byte integer: <sourceId> <type> <feature> <option>