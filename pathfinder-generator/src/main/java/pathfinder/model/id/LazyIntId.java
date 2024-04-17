package pathfinder.model.id;

import pathfinder.model.pathfinder.SourceId;

class LazyIntId implements IntId {

    private final SourceId sourceId;
    private final String code;
    private Integer cached;

    LazyIntId(SourceId sourceId, String code) {
        this.sourceId = sourceId;
        this.code = code;
    }

    @Override
    public int number() {
        if (cached == null) {
            cached = sourceId.generate(code).number();
        }
        return cached;
    }
}
