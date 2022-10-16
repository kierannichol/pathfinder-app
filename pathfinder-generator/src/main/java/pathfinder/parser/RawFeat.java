package pathfinder.parser;

public class RawFeat {
    public int id;
    public String name;
    public String type;
    public String description;
    public String prerequisites;
    public String prerequisite_feats;
    public String benefit;
    public String normal;
    public String special;
    public String source;
    public int teamwork;
    public int critical;
    public int grit;
    public int style;
    public int performance;
    public int racial;
    public int companion_familiar;
    public String race_name;
    public String note;
    public String goal;
    public String completion_benefit;
    public int multiples;

    @Override
    public String toString() {
        return "RawFeat(" + name + ")";
    }
}
