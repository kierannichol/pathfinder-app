package pathfinder.util;

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;

public class SortedArrayList<E> extends AbstractList<E> {
    private final Comparator<E> comparator;
    private final ArrayList<E> internalList;

    public SortedArrayList(Collection<E> collection) {
        this.internalList = new ArrayList<>(collection);
        this.comparator = null;
    }

    public SortedArrayList(Comparator<E> comparator) {
        this.internalList = new ArrayList<>();
        this.comparator = comparator;
    }

    public SortedArrayList(Collection<E> collection, Comparator<E> comparator) {
        this.internalList = new ArrayList<>(collection);
        this.comparator = comparator;
    }

    @Override
    public void add(int position, E e) {
        internalList.add(e);
        internalList.sort(comparator);
    }

    @Override
    public boolean addAll(int index, Collection<? extends E> c) {
        boolean r = internalList.addAll(index, c);
        internalList.sort(comparator);
        return r;
    }

    @Override
    public E remove(int index) {
        return internalList.remove(index);
    }

    @Override
    public E get(int i) {
        return internalList.get(i);
    }

    @Override
    public int size() {
        return internalList.size();
    }
}
