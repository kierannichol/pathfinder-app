# Data Format: V8

## Entity
 _description_

| Attribute  | Description                                                                                                   |
|------------|:--------------------------------------------------------------------------------------------------------------|
| selections | a mapping of _paths_ to selected _option IDs_. The available _paths_ are provided by the available _Choices_. |
| traits     |                                                                                                               |

## Trait
Basic abstraction for parts of an entity. These will effect the state of the entity.

| Attribute | Description                                         |
|-----------|:----------------------------------------------------|
| _traits_  | The traits provided by this trait.                  |
| _apply_   | How this trait applies itself to an entity's state. |

## Feature (Trait)
_description_

| Attribute |                                                                                                        |
|-----------|--------------------------------------------------------------------------------------------------------|
| key       | a unique identifier for this choice.                                                                   |
| path      | a combination of the _path_ of the feature that provided this feature, plus the _key_ of this feature. |

## Choice (Trait)
_description_

| Attribute | Description                                                                                                                                 |
|-----------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| key       | a unique identifier for this choice.                                                                                                        |
| path      | a combination of the _path_ of the feature that provided this choice, plus the _key_ of this choice.                                        |
| options   | the list of _feature IDs_ that are valid for this choice.                                                                                   |
| selected  | if entity has selected value with key _path_ and the selected value exists within _options_, then this Feature becomes the selected option. |

## Choice Option (Trait)
_description_

| Attribute | Description                                                                                                                                 |
|-----------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| key       | the ID of the feature this option is for.                                                                                                   |

## Effect (Trait)
_description_

